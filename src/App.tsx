import { useState } from "react";
import "./App.css";
import WeaponSlot from "./components/WeaponSlot";
import { Settings } from "./model";
import { Primaries, Secondaries } from "./model/Guns";
import { Melees, PerkDecks, Throwables } from "./model/Misc";

function App() {
    const [trigger, setTrigger] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    const toggleSettings = () => {
        setOpenSettings(!openSettings);
        console.warn("TOGGLE");
    }
    
    return (
        <div className="App">
            <div className="body">
                <h2 className="menu-item" onClick={() => setTrigger(!trigger)}>Randomize</h2>

                <div className={`settings-container ${openSettings ? "" : "invisible"}`}>
                    <h2>Settings</h2>
                </div>
            </div>
            <div className="inventory">
                <div className="col">
                    <WeaponSlot values={Primaries} trigger={trigger}>Primary</WeaponSlot>
                    <WeaponSlot values={Secondaries} trigger={trigger}>Secondary</WeaponSlot>
                    <WeaponSlot values={Throwables} trigger={trigger}>Throwable</WeaponSlot>
                    <WeaponSlot values={Melees} trigger={trigger}>Melee</WeaponSlot>
                </div>

                <div className="col">
                    <WeaponSlot values={[Settings]} trigger clickable onClick={toggleSettings}>Settings</WeaponSlot>
                    <WeaponSlot values={PerkDecks} trigger={trigger}>Perk Deck 1</WeaponSlot>
                    <WeaponSlot values={PerkDecks} trigger={trigger}>Perk Deck 2</WeaponSlot>
                    <WeaponSlot values={PerkDecks} trigger={trigger}>Perk Deck 3</WeaponSlot>
                </div>
            </div>
        </div>
    );
}

export default App;
