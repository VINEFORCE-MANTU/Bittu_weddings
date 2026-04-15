import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-family',
  standalone: true,
   imports: [CommonModule, RouterModule], 
  templateUrl: './family.html',
})
export class Family {

  selectedMember: any = null;

openPreview(member: any) {
  this.selectedMember = member;
}

closePreview() {
  this.selectedMember = null;
}

// 👰 Bride Side
brideFamily = [
  {
    name: 'श्री सुमेश्वर तिवारी',
    role: 'Father',
    image: 'assets/family/bride-father.jpg'
  },
  {
    name: 'श्रीमती ...',
    role: 'Mother',
    image: 'assets/family/bride-mother.jpg'
  },
  {
    name: 'भाई',
    role: 'Brother',
    image: 'assets/family/bride-brother.jpg'
  },
  {
    name: 'बहन',
    role: 'Sister',
    image: 'assets/family/bride-sister.jpg'
  },
  
   { name: 'भाभी',
    role: 'Bhabhi',
    image: 'assets/family/bhabhi.jpg'
  }
];

// 🤵 Groom Side
groomFamily = [
  {
    name: 'श्री अरुण पाण्डेय',
    role: 'Father',
    image: 'assets/family/groom-father.jpg'
  },
  {
    name: 'श्रीमती ...',
    role: 'Mother',
    image: 'assets/family/groom-mother.jpg'
  },
  {
    name: 'भाई',
    role: 'Brother',
    image: 'assets/family/groom-brother.jpg'
  },
  {
    name: 'बहन',
    role: 'Sister',
    image: 'assets/family/groom-sister.jpg'
  },
  
];}