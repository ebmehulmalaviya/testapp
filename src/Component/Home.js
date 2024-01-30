import React, { useState } from 'react';

const DynamicInputForm = () => {
    const [inputSets, setInputSets] = useState([{ name: '', ft: '', rate: '', total: '' }]);

    const handleChange = (setIndex, fieldName, value) => {
        const newInputSets = [...inputSets];
        newInputSets[setIndex] = { ...newInputSets[setIndex], [fieldName]: value };

        // Automatically calculate 'total' based on 'ft' and 'rate'
        if (fieldName === 'ft' || fieldName === 'rate') {
            const ft = parseFloat(newInputSets[setIndex].ft) || 0;
            const rate = parseFloat(newInputSets[setIndex].rate) || 0;
            newInputSets[setIndex].total = (ft * rate).toFixed(2);
        }

        setInputSets(newInputSets);
    };

    const handleAddFields = () => {
        setInputSets([...inputSets, { name: '', ft: '', rate: '', total: '' }]);
    };

    const handlePrintValues = () => {
        console.log(inputSets);
    };

    return (
        <div>
            {inputSets.map((inputSet, setIndex) => (
                <div key={setIndex}>
                    <input
                        className='border'
                        type="text"
                        value={inputSet.name}
                        onChange={(e) => handleChange(setIndex, 'name', e.target.value)}
                    />
                    <input
                        className='border'
                        type="text"
                        value={inputSet.ft}
                        onChange={(e) => handleChange(setIndex, 'ft', e.target.value)}
                    />
                    <input
                        className='border'
                        type="text"
                        value={inputSet.rate}
                        onChange={(e) => handleChange(setIndex, 'rate', e.target.value)}
                    />
                    <input
                        className='border'
                        type="text"
                        value={inputSet.total}
                        onChange={(e) => handleChange(setIndex, 'total', e.target.value)}
                    />
                </div>
            ))}
            <button onClick={handleAddFields}>Add Fields</button>
            <button onClick={handlePrintValues}>Print Values</button>
        </div>
    );
};

export default DynamicInputForm;
