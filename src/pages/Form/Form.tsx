import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { saveSheet } from '../../services/sheetService';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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


    interface IformInputs {
        name: string,
        class: string,
        description: string,
        race: string,
        strenght: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        gender: string
    }

    const schema = yup.object({
        name: yup.string().required('campo obrigatorio'),
        class: yup.string().required('campo obrigatorio'),
        description: yup.string().required('campo obrigatorio'),
        race: yup.string().required('campo obrigatorio'),
        strenght: yup.number().required('campo obrigatorio'),
        dexterity: yup.number().required('campo obrigatorio'),
        constitution: yup.number().required('campo obrigatorio'),
        intelligence: yup.number().required('campo obrigatorio'),
        wisdom: yup.number().required('campo obrigatorio'),
        charisma: yup.number().required('campo obrigatorio'),
        gender: yup.string().required('campo obrigatorio')
    }).required();

    const { handleSubmit, register, formState: { errors } } = useForm<IformInputs>({
        resolver: yupResolver(schema)
    })

    const [onFetching, setOnFetching] = useState<boolean>(
        false
    )

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

    const onSubmit = (sheet: IformInputs) => {
        //e.preventDefault();

        // if (form.name.length >= 16) {
        //     setError((state) => ({
        //         ...state,
        //         name: 'Too long'
        //     }));
        //     return;
        // } else {
        //     setError((state) => ({
        //         ...state,
        //         name: ''
        //     }))
        // };
        console.log("dentro")
        saveSheet(sheet);

        showData();
    }

    return (
        <Frontend>
            <div className="form">
                <header className="Form-header">
                    <h1>Character Registration</h1>
                    <form onSubmit={handleSubmit(onSubmit)} id="form1">
                        <label>
                            Name:
                            <input required minLength={0 - 16} type="text" {...register('name', { required: true })} />
                        </label>

                        <label>
                            Class:
                            <select defaultValue={"Fighter"}{...register('class', { required: true })}>
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
                            <select defaultValue={"Human"}{...register('race', { required: true })}>
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
                        <RadioGroup {...register('gender', { required: true })}
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
                            <input type="number" min="0" max="4" placeholder='+0' {...register('strenght', { required: true })} />
                        </label>

                        <label>
                            Dexterity:
                            <input type="number" min="0" max="4" placeholder='+0' {...register('dexterity', { required: true })} />
                        </label>

                        <label>
                            Constitution:
                            <input type="number" min="0" max="4" placeholder='+0' {...register('constitution', { required: true })} />
                        </label>

                        <label>
                            Intelligence:
                            <input type="number" min="0" max="4" placeholder='+0' {...register('intelligence', { required: true })} />
                        </label>

                        <label>
                            Wisdom:
                            <input type="number" min="0" max="4" placeholder='+0' {...register('wisdom', { required: true })} />
                        </label>

                        <label>
                            Charisma:
                            <input type="number" min="0" max="4" placeholder='+0' {...register('charisma', { required: true })} />
                        </label>

                        <label>
                            Lore:
                            <textarea {...register('description', { required: true })} />
                        </label>

                        <div>
                            <button className='Btnsubmit' type='submit' form='form1'>Submit</button>
                        </div>

                    </form>
                </header>
            </div >
        </Frontend>
    );
}

export default Form;
