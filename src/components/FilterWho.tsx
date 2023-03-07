import React from 'react'
import cities from '../data/cities.json'
import Selection from "react-select";
import makeAnimated from 'react-select/animated';
const tGroups = [
 { value: 1, label: "Çocuk" },
 { value: 2, label: "Ergen" },
 { value: 3, label: "Yetişkin" },
 { value: 4, label: "Yaşlı" },
];
function FilterWho() {
 const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
 const animatedComponents = makeAnimated();
 const setHandle = (e: any) => {
  setSelectedOptions(Array.isArray(e) ? e.map((tGroup: { label: any; }) => tGroup.label) : []);
  };
  return (
   <div className='flex flex-col col-span-1 md:col-span-2 space-y-6 sm:space-y-3'>
     <span className='font-semibold'>Kime Uygun?</span>
     <div className="flex flex-nowrap">
      <Selection className='w-full' options={tGroups} onChange={setHandle} closeMenuOnSelect={false} components={animatedComponents}  isMulti placeholder="Seçiniz" />
     </div>
   </div>
  )
}

export default FilterWho