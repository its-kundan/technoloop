import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { Filter } from 'lucide-react'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    
    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue, dispatch]);
    
    return (
        <div className='card-modern p-6'>
            <div className='flex items-center gap-2 mb-4'>
                <Filter className='w-5 h-5 text-primary' />
                <h2 className='font-bold text-xl text-foreground'>Filter Jobs</h2>
            </div>
            <hr className='mb-6 border-border' />
            
            <RadioGroup value={selectedValue} onValueChange={changeHandler} className='space-y-6'>
                {
                    fitlerData.map((data, index) => (
                        <div key={index} className='space-y-3'>
                            <h3 className='font-semibold text-lg text-foreground'>{data.fitlerType}</h3>
                            <div className='space-y-2'>
                                {
                                    data.array.map((item, idx) => {
                                        const itemId = `id${index}-${idx}`
                                        return (
                                            <div key={itemId} className='flex items-center space-x-2'>
                                                <RadioGroupItem value={item} id={itemId} />
                                                <Label 
                                                    htmlFor={itemId} 
                                                    className='text-muted-foreground hover:text-foreground cursor-pointer transition-colors'
                                                >
                                                    {item}
                                                </Label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </RadioGroup>
            
            {selectedValue && (
                <div className='mt-6 pt-4 border-t border-border'>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-muted-foreground'>Selected:</span>
                        <span className='text-sm font-medium text-primary'>{selectedValue}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterCard