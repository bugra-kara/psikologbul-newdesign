import Selection from "react-select";
import makeAnimated from 'react-select/animated';
import { useDataContext } from '../context/DataContext';
const tGroups = [
 { value: 1, label: "Çocuk" },
 { value: 2, label: "Ergen" },
 { value: 3, label: "Yetişkin" },
 { value: 4, label: "Yaşlı" },
];
function FilterWho() {
  const { handleChangeByWho } = useDataContext()
  const animatedComponents = makeAnimated();
  return (
   <div className='flex flex-col col-span-3 md:col-span-2 space-y-6 sm:space-y-3'>
     <span className='font-semibold'>Kime Uygun?</span>
     <div className="flex flex-nowrap">
      <Selection className='w-full' options={tGroups} onChange={(e: any)=>{handleChangeByWho(Array.isArray(e) ? e.map((tGroup: { label: any; }) => tGroup.label) : [])}} closeMenuOnSelect={false} components={animatedComponents}  isMulti placeholder="Seçiniz" />
     </div>
   </div>
  )
}

export default FilterWho