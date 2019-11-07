import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './App.css';

export default function CheckboxLabels() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div>
            <FormGroup>

                <div>
                    <FormControlLabel
                    control={
                        <Checkbox 
                        checked={state.checkedA} 
                        onChange={handleChange('checkedA')} 
                        value="checkedA" 
                        />
                    }
                    label="No llego"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange('checkedB')}
                        value="checkedB"
                        />
                    }
                    label="Se descompuso"
                    />
                </div>
                
                <div>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange('checkedC')}
                        value="checkedC"
                        />
                    }
                    label="Se incendio"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.checkedD}
                        onChange={handleChange('checkedD')}
                        value="checkedD"
                        />
                    }
                    label="Gabo es pto"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.checkedE}
                        onChange={handleChange('checkedE')}
                        value="checkedE"
                        />
                    }
                    label="Es TecBot"
                    />
                </div>

            </FormGroup>
        </div>
    );
}