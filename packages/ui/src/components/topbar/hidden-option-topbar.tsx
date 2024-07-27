export const HiddenOptionTopbar = () => {
    const handleSelectChange = () => {}
    
    return <div className="sm:hidden">
    <label className="sr-only">Select from List</label>
    <select
      onChange={handleSelectChange}
      id="tabs"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-800 dark:border-gray-50 dark:placeholder-gray-400 dark:text-white dark:focus:ring-4 dark:focus:border-0 dark:focus:border-blue-500"
    >
      <option value="venuestable">Venues</option>
      <option value="artiststable">Artists</option>
      <option value="labelstable">Labels</option>
      <option value="songstable">Songs</option>
    </select>
  </div>
}