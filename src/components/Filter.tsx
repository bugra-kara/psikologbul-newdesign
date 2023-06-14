import { FilterWho, FilterCity, FilterStatus, FilterLang } from '.'
function Filter() {
  return (
    <>
    <div className='flex flex-col px-4 sm:px-0 relative'>
    <div style={{backgroundImage: `url(${"/web-head-bg.png"})`}} className='hidden sm:flex place-items-center justify-center bg-no-repeat bg-cover bg-center w-full h-72'>
      <div className='container mx-auto w-full flex flex-col'>
        <span className='text-center px-2 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52 py-6 text-most sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
        Depremzedelere yönelik, ücretsiz psikososyal destek veren <strong>kişi ve kurumların yer aldığı gönüllü bir platformdur.</strong>
        </span>
      </div>
    </div>
    <div className='container mx-auto w-full flex sm:hidden flex-col'>
      <span className='text-center px-2 sm:px-52 py-6 text-most sm:text-3xl'>
      Depremzedelere yönelik, ücretsiz psikososyal destek veren <strong>kişi ve kurumların yer aldığı gönüllü bir platformdur.</strong>
      </span>
    </div>
    </div>
      <div className='flex flex-col px-4 relative'>
        <div className='container mx-auto w-full flex flex-col sm:relative sm:pb-44 md:pb-20'>
          <div className='bg-white rounded-md shadow-md px-6 py-6 sm:absolute sm:-top-16 w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 lg:gap-4 w-full'>
              <FilterStatus />
              <FilterCity />
              {/*<FilterLang />*/}
              <FilterWho />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter