import { useEffect, useRef } from "react";
import Randomized from "../../model/Randomized";
import "./WeaponSlot.css";

type Props = {
    values: Randomized[] | Randomized[][],
    trigger: boolean,
    clickable?: boolean,
    children?: string,
    onClick?: React.MouseEventHandler<HTMLHeadingElement>
};

function WeaponSlot({ values, trigger, clickable = false, onClick, children }: Props) {
    const random = (array: any[]) => array[Math.floor(Math.random() * array.length)];

    const is1D = values[0].constructor !== Array;
    const selected = useRef(is1D ? (values[0] as Randomized) : (values[0] as Randomized[])[0]);

    useEffect(() => {
        selected.current = is1D ? random(values) : random(random(values));
    }, [trigger, values, is1D]);

    return (
        <div className={`WeaponSlot ${clickable ? "clickable" : ""}`} onClick={onClick}>
            <div className="border">
                <div className="container">
                    <span className="label">{children}</span>
                    <img src={selected.current.getSprite()} alt={selected.current.name} />
                    <span className="name">{selected.current.name}</span>
                </div>
            </div>
        </div>
    );
}

export default WeaponSlot;