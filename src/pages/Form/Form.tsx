import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { saveSheet } from '../../services/sheetService';
import Frontend from '../../templates/Frontend';
import './styles.css'


function App() {
    const [form, setForm] = useState({
        name: '',
        class: 'Fighter',
        description: '',
        race: 'Human',
        strenght: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        gender: 'other'
    });

    interface IformInputs {
        name: string | "",
        class: string | "",
        description: string | "",
        race: string | "",
        strenght: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        gender: string | ""
    }

    const [error, setError] = useState({
        name: ''
    })

    const onChange = (e: any) => {
        const { value, name, type, checked } = e.target;

        setForm((state) => ({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleChange = (e: any) => {
        form.gender = e.target.defaultValue
    }


    const onSubmit = (e: any) => {
        e.preventDefault();

        const sheet: IformInputs = {
            name: form.name,
            class: form.class,
            description: form.description,
            race: form.race,
            strenght: form.strenght,
            dexterity: form.dexterity,
            constitution: form.constitution,
            intelligence: form.intelligence,
            wisdom: form.wisdom,
            charisma: form.charisma,
            gender: form.gender
        }

        if (form.name.length >= 16) {
            setError((state) => ({
                ...state,
                name: 'Too long'
            }));
            return;
        } else {
            setError((state) => ({
                ...state,
                name: ''
            }))
        };

        saveSheet(sheet);

    }

    return (
        <Frontend>
            <div className="form">
                <header className="Form-header">
                    <h1>Character Registration</h1>
                    <form onSubmit={onSubmit}>
                        <label>
                            Name:
                            <input required minLength={0 - 16} onChange={onChange} type="text" name="name" value={form.name} />
                        </label>
                        {!!error.name && (
                            <div>
                                <i>{error.name}</i>
                            </div>
                        )}
                        <label>
                            Class:
                            <select onChange={onChange} value={form.class} name="class">
                                <option value="Barbarian">Barbarian</option>
                                <option value="Bard">Bard</option>
                                <option value="Cleric">Cleric</option>
                                <option value="Druid">Druid</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Monk">Monk</option>
                                <option value="Paladin">Paladin</option>
                                <option value="Ranger">Ranger</option>
                                <option value="Rogue">Rogue</option>
                                <option value="Sorcerer">Sorcerer</option>
                                <option value="Warlock">Warlock</option>
                                <option value="Wizard">Wizard</option>
                            </select>
                        </label>

                        <label>
                            Race:
                            <select onChange={onChange} value={form.race} name="race">
                                <option value="Elf">Elf</option>
                                <option value="Dwarf">Dwarf</option>
                                <option value="Human">Human</option>
                                <option value="Dragonborn">Dragonborn</option>
                                <option value="Gnome">Gnome</option>
                                <option value="Half-Elf">Half-Elf</option>
                                <option value="Halfling">Halfling</option>
                                <option value="Half-Orc">Half-Orc</option>
                                <option value="Tiefling">Tiefling</option>
                            </select>
                        </label>

                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <h3>Gender:</h3>
                        <RadioGroup
                            onChange={handleChange}
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="other"
                            name="gender"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" labelPlacement='start' />
                            <FormControlLabel value="male" control={<Radio />} label="Male" labelPlacement='start' />
                            <FormControlLabel value="other" control={<Radio />} label="Other" labelPlacement='start' />
                        </RadioGroup>

                        <label>
                            Strenght:
                            <input type="number" onChange={onChange} name="strenght" min="0" max="4" placeholder='+0' value={form.strenght} />
                        </label>

                        <label>
                            Dexterity:
                            <input type="number" onChange={onChange} name="dexterity" min="0" max="4" placeholder='+0' value={form.dexterity} />
                        </label>

                        <label>
                            Constitution:
                            <input type="number" onChange={onChange} name="constitution" min="0" max="4" placeholder='+0' value={form.constitution} />
                        </label>

                        <label>
                            Intelligence:
                            <input type="number" onChange={onChange} name="intelligence" min="0" max="4" placeholder='+0' value={form.intelligence} />
                        </label>

                        <label>
                            Wisdom:
                            <input type="number" onChange={onChange} name="wisdom" min="0" max="4" placeholder='+0' value={form.wisdom} />
                        </label>

                        <label>
                            Charisma:
                            <input type="number" onChange={onChange} name="charisma" min="0" max="4" placeholder='+0' value={form.charisma} />
                        </label>

                        <label>
                            Lore:
                            <textarea onChange={onChange} name="description" value={form.description} />
                        </label>

                        <div>
                            <button className='Btnsubmit'>Submit</button>
                        </div>

                    </form>
                </header>
            </div >
        </Frontend>
    );
}

export default App;
