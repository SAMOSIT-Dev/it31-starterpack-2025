import addFriend from '../../../public/icon/add-friend.png'

export default function GlowButton({ type, width, height, px, py }) {
    return (
        <div className={`${width} ${height} rounded-[20px] p-[3px] bg-button-gradient  shadow-[0_0_31px_6px_#BB3E4291]/57 `}>
            <button className={`w-full h-full rounded-[18px] bg-[radial-gradient(229.64%_116.67%_at_50.36%_8.82%,#66232C_0%,#BB3E42_46.63%,#FE8A4F_100%)]
            flex items-center justify-center gap-[8px] cursor-pointer`}>
                <img src={addFriend} alt="Add friend" />
                <p className="text-16px tracking-[-1.1%] text-white self-center font-mitr">
                    {type === "understand" ? "เข้าใจแล้ว" : "หาเพื่อน"}
                </p>
            </button>
                    

        </div>
    )
}