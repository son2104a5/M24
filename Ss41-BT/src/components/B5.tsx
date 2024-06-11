export default function B5() {
  return (
    <div className="relative h-52 w-52 bg-blue-100 text-blue-900 p-5">
      <p>Relative parent</p>
      <div className="absolute h-30 w-30 bg-blue-500 rounded text-white p-2 bottom-0 left-0">
      <p>Absolute child</p>
      </div>
      <br />
    </div>
  )
}
