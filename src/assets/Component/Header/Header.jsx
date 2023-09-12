import ProfileImg from "../../images/profile.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-6 mt-3 border-b" >
        <div>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        </div>

        <div>
            <img className="w-[90%]" src={ProfileImg} alt="" />
        </div>
    </div>
  )
}
