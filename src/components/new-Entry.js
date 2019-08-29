import React from 'react';
import NameForm from './text-entry';
import DatePickers from './date';
import './new-entry.css';






class NewEntry extends React.Component {
    render() {
        return (


            <div className="display1">

                <NameForm />
                <DatePickers />



            </div>





        )
    }
}
export default NewEntry;