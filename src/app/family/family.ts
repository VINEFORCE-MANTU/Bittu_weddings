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
    image: 'assets/brideFather.png'
  },
  {
    name: 'श्रीमती ...',
    role: 'Mother',
    image: 'assets/bridesmom.png'
  },
  {
    name: 'भाई',
    role: 'Brother',
    image: 'assets/bride_brother.png'
  },
  {
    name: 'बहन',
    role: 'Sister',
    image: 'assets/brides_sister.png'
  },
  {
    name: 'बहन',
    role: 'Sister',
    image: 'assets/Bride_Sister2.png'
  }
];

// 🤵 Groom Side
groomFamily = [
  {
    name: 'श्री अरुण पाण्डेय',
    role: 'Father',
    image: 'assets/GroomDAd.jpeg'
  },
  {
    name: 'श्रीमती ...',
    role: 'Mother',
    image: 'assets/groomMom.jpeg'
  },
  {
    name: 'भाई',
    role: 'Brother',
    image: 'assets/gromm_brother2.png',
  },
  {
    name: 'बहन',
    role: 'Sister',
    image: 'assets/GroomSister.jpeg'
  },
   { name: 'भाभी',
    role: 'Bhabhi',
    image: 'assets/GBBhabhi (1).png'
  },
   { name: 'भाई की बेटी ',
    role: 'Brother-Daughter',
    image: 'assets/GroomaBrotherDaughter.png'
  }
  
];}