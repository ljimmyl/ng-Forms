import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })

  profileForm = this.fb.group({
   firstName: ['', Validators.required],
   lastName: [''],
   address: this.fb.group({
     street: [''],
     city: [''],
     state: [''],
     zip: ['']
   }),
    aliases: this.fb.array([
      this.fb.control(''),
    ])
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value)
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Tomato',
      address: {
        street: 'Garden Bed Street'
      }
    })
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  goBack() {
    this.location.back();
  }

}
