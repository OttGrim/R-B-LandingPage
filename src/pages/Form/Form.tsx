import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Frontend from '../../templates/Frontend';
import './styles.css';

function Form() {
    const [form, setForm] = useState({
        name: '',
        class: 'Fighter',
        description: '',
        race: 'Human',
        strenght: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
        gender: 'Other'
    });

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

    const showData = () => {
        console.log('Form: ', form);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();

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


        showData();
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
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="other"
                            name="radio-buttons-group"
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

export default Form;
