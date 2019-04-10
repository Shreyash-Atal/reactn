import React, { useGlobal, useState } from "reactn";

const GatorTrap = () => {
    const [baits] = useGlobal("baits");
    const [caught, setCaught] = useGlobal("caught");

    const [baited, setBaited] = useState(false);

    if (baited) {
        setTimeout(() => {
            setBaited(false);
            setCaught(caught + 1);
        }, 10 * 1000);
    }
    return (
        <div>
            {!baited && (
                <select
                    onChange={event => {
                        if (event.target.value) {
                            setBaited(true);
                        }
                    }}
                >
                    <option value="">Bait This Trap</option>
                    {baits.map(bait => (
                        <option key={bait} value={bait}>
                            {bait}
                        </option>
                    ))}
                </select>
            )}
            {baited && <div>Trap baited... now we wait.</div>}
            <br />
            <br />
        </div>
    );
}
export default GatorTrap;