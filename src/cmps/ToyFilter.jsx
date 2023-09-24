import { useState } from "react"
import { useSelector } from "react-redux"
import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'

import { setFilterByAction } from "../store/actions/toy.actions"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
    'Outdoor', 'Battery Powered']

function getStyles(name, labels, theme) {
    return {
        fontWeight:
            labels.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

export function ToyFilter() {
    const theme = useTheme()
    const [filterBy, setFilterBy] = useState(useSelector(storeState => storeState.toyModule.filterBy))

    function handleSelectChange(event) {
        const { target: { value } } = event
        const labels = typeof value === 'string' ? value.split(',') : value
        setFilterBy({ ...filterBy, labels })
    }

    function onHandleChange({ target }) {

        const field = target.name
        const value = target.type === 'number' ? +target.value || '' : target.value

        setFilterBy({ ...filterBy, [field]: value })
    }

    function onSetFilterBy(ev) {
        ev.preventDefault()
        setFilterByAction(filterBy)
    }


    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }} onSubmit={onSetFilterBy}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={filterBy.labels}
                    onChange={handleSelectChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {labels.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, labels, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <form action="" onSubmit={onSetFilterBy}>
                <input value={filterBy.name} type="text" onChange={onHandleChange} placeholder="Search by name..." name="name" />
                <select onChange={onHandleChange} name="inStock">
                    <option value="all">All</option>
                    <option value="in-stock">In Stock</option>
                    <option value="not-in-stock">Not In Stock</option>
                </select>
                <button>Search</button>
            </form>
        </div>
    )
}
