export default function Layout({ children }) {
  return (
    <>
        <div className="w-[80%] m-auto my-[3rem]">
            <main>{children}</main>
        </div> 
    </>
  )
}