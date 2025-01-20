import React, { useState } from 'react';

const FilterTask = () => {

    const tableFormData = []

  const [formData, setFormData] = useState(tableFormData);

  const inputFormData = {
    FirstName: '',
    LastName: '',
    Email: ''
  }

  const [value, setValue] = useState(inputFormData);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newData = [...formData, value];
    setFormData(newData);
    setValue(inputFormData);
  };

  const searchForm = []

  const [search , setSearch] = useState('')
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
    const filterData = formData.filter((item) => item.FirstName === e.target.value);
    searchForm.push(filterData);
    console.log(filterData);
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <form onSubmit={handleFormSubmit} className='max-w-[300px] w-full mx-auto flex flex-col gap-4 ' action="">
        <input type="text" placeholder='First Name' value={value.FirstName} onChange={(e) => setValue({...value, FirstName: e.target.value})} className='w-full py-2 px-3 border border-solid border-gray-500 outline-none rounded-md ' required  />
        <input type="text" placeholder='Last Name' value={value.LastName} onChange={(e) => setValue({...value, LastName: e.target.value})}  className='w-full py-2 px-3 border border-solid border-gray-500 outline-none rounded-md ' required />
        <input type="email" placeholder='Email' value={value.Email} onChange={(e) => setValue({...value, Email: e.target.value})}  className='w-full py-2 px-3 border border-solid border-gray-500 outline-none rounded-md ' required />
        <button className='py-2 px-3 bg-indigo-600 text-white rounded-md font-medium' type='submit'>Save</button>
      </form>
        <div className='flex mt-5 items-center max-w-[1320px] w-full'>
      <table className='w-[70%] border border-collapse border-solid border-black rounded-md'>
        <tr className='border-solid border-collapse'>
          <th className='text-left px-5 py-2 border-collapse border border-solid border-black'>First Name</th>
          <th className='text-left px-5 py-2 border-collapse border border-solid border-black'>Last Name</th>
          <th className='text-left px-5 py-2 border-collapse border border-solid border-black'>Email</th>
        </tr>
        {formData.map((item, index) => (
          <tr key={index} className='border-solid border-collapse'>
            <td className='text-left px-5 border border-solid border-black border-collapse'>{item.FirstName}</td>
            <td className='text-left px-5 border border-solid border-black border-collapse'>{item.LastName}</td>
            <td className='text-left px-5 border border-solid border-black border-collapse'><a className='text-blue-400' href={`mailto:${item.Email}`}>{item.Email}</a></td>
          </tr>
        ))}
      </table>
      <div className='w-[30%] flex-col items-center justify-end flex'>
            <form onSubmit={searchHandler} className='border border-solid border-black overflow-hidden pl-2 rounded-md' action="">
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' required className='py-2 px-3 outline-none rounded-md' type="text" />
                <button type='submit' className='py-2 px-3 bg-indigo-600 text-white'>Search</button>
            </form>
            <table>
                {searchForm.map((item, index) => (
                    <tr key={index} className='border-solid border-collapse'>
                        <td className='text-left px-5 border border-solid border-black border-collapse'>{item.FirstName}</td>
                        <td className='text-left px-5 border border-solid border-black border-collapse'>{item.LastName}</td>
                        <td className='text-left px-5 border border-solid border-black border-collapse'><a className='text-blue-400' href={`mailto:${item.Email}`}>{item.Email}</a></td>
                    </tr>
                ))}
            </table>
        </div>
      </div>
    </div>
  );
};

export default FilterTask;