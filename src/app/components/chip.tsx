import { FC } from "react";

interface IChip {
    title: string;
}
const Chip: FC<IChip> = ({ title }) => {
    return (
        <div className="my-2 mr-2">
            <span className="text-sm bg-[#012245] py-1 px-3 rounded-full text-nowrap">{title}</span>
        </div>
    )
}

export default Chip