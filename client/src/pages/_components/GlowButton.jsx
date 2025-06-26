export default function GlowButton({ type }) {
    return (
        <div className="rounded-[22px] p-[2px] bg-button-gradient shadow-[0_0_31px_6px_#BB3E4291]/57">
            <button className="py-[8px] px-[85px] bg-black rounded-[20px] bg-radial-[at_50%_-20%] from-[#66232C] via-[#BB3E42] to-[#FE8A4F]">
                <p className="text-16px tracking-[-1.1%] text-white self-center font-mitr">
                    {type === "understand" ? "เข้าใจแล้ว" : "หาเพื่อน"}
                </p>
            </button>

        </div>
    )
}