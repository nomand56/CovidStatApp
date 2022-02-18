import {useState,useEffect} from 'react'
import Countries from './Countries'
import MultipleCountries from './MultipleCountries';
export default function Cards({Screen}) {
if (Screen===0)
return <Countries/>
else return <MultipleCountries/>
}


