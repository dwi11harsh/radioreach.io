export function TableLoader() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    return (
      <div>
        <div className=" w-full relative overflow-x-auto rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="w-full text-xs text-gray-700 uppercase bg-inherit dark:bg-inherit dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <Loader />
                </th>
                <th scope="col" className="px-6 py-3">
                  <Loader />
                </th>
                <th scope="col" className="px-6 py-3">
                  <Loader />
                </th>
                <th scope="col" className="px-6 py-3">
                  <Loader />
                </th>
              </tr>
            </thead>
            <tbody>
              {arr.map((element) => (
                <tr
                  key={element}
                  className="bg-inherit border-b dark:bg-inherit dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-sky-950"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Loader />
                  </th>
                  <td className="px-6 py-4">
                    <Loader />
                  </td>
                  <td className="px-6 py-4">
                    <Loader />
                  </td>
                  <td className="px-6 py-4">
                    <Loader />
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  function Loader() {
    return (
      <div>
        <div className="w-full animate-pulse">
          <div className="w-full h-2 mx-3 my-2 dark:bg-slate-800 bg-gray-200  rounded"></div>
        </div>
      </div>
    );
  }