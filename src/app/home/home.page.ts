import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Firestore, collection, addDoc} from '@angular/fire/firestore';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  //imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit{
  formulario!: FormGroup; 
  constructor(private fb: FormBuilder, private firestore: Firestore) {}
  ngOnInit(){
    this.formulario=this.fb.group({
      nombres: [''],
      apellidos: [''],
      email: [''],
      fechaNacimiento: [''],
      telefono: [''],
      direccion: [''],
      estadoCivil: [''],
      nacionalidad: [''],
      ocupacion: [''],
      cedula: ['']
    })
  }
  async guardarDatos(){
    const datos = this.formulario.value;
    const coleccionRef = collection(this.firestore, 'formularios_prueba1');
    await addDoc(coleccionRef, datos);
    alert('Datos guardados con éxito');
    console.log('Datos guardados en Firestore:', datos);
    this.formulario.reset();
  }
}
