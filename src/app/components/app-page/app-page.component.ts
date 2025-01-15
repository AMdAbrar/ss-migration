import { Component } from '@angular/core';
//i need segment like exm1 and exm2 if i click exm1 below it need to show some name example a b c d e and then again if i click a it need to show 2 options like 1, 2 if i click 1 it need to show again some links example x,y z and then if i click exm2 the exm1 should be hide 
@Component({
  selector: 'app-app-page',
  templateUrl:'./app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent {
  selectedSubSegment: string | null = null;
  selectedOption: string | null = null;
  
 
segmentData: { [key: string]: { [key: string]: { text: string; url: string }[] } } = {
//   Consero General Quick Link: {
//   option1: ['X', 'Y', 'Z'],
//   option2: ['Q', 'W', 'E']
// },
Delivery: {
  Internet: [
  {text: 'Blackline', url:'https://conseroglobal.com/' },
  { text:'Client Success Survey', url:'https://conseroglobal.com/'}
],
  Gdrive: [
    { text: 'Monthly KPIs', url: 'https://www.zara.com/in/en/mini-tote-bag-p16224410.html?v1=422746263&utm_source=google&utm_medium=cpc&gad_source=1&gclid=CjwKCAiAhP67BhAVEiwA2E_9g0JhoBqSMBLNAgbWkiy01n6i_ply9EG3xop18uLGPUtczGc1QUxquRoCtA0QAvD_BwE' },
    { text: 'Overage Billings', url: 'https://www.flipkart.com/skybags-brat-21-65-l-backpack/p/itm04aff3ff6fb19?pid=BKPGF764YQBHHGWJ&lid=LSTBKPGF764YQBHHGWJFL8MIF&marketplace=FLIPKART&cmpid=content_backpack_8965229628_gmc&gQT=1' },
    { text: 'SOC reports-Consero', url: 'https://example.com/page3' },
    { text: 'SOC Reports-Client Tools', url: 'https://example.com/page3' },
    { text: 'Standards/Policies/Procedures', url: 'https://example.com/page3' },
    { text: 'Tech Accounting Documentation', url: 'https://example.com/page3' },
    { text: 'VPF Budget Calculator', url: 'https://example.com/page3' }
  ]
},
// Professional Service Group: {
//   option1: ['A1', 'B1', 'C1'],
//   option2: ['D1', 'E1', 'F1']
// },
// Human Resources: {
//   option1: ['G1', 'H1', 'I1'],
//   option2: ['J1', 'K1', 'L1']
// },
// Sales & Marketing: {
//   option1: ['G1', 'H1', 'I1'],
//   option2: ['J1', 'K1', 'L1']
// },
// US Admin: {
//   option1: ['G1', 'H1', 'I1'],
//   option2: ['J1', 'K1', 'L1']
// },
Product: {
  Internet: [
    { text: 'Page 1', url: 'https://www.zara.com/in/en/mini-tote-bag-p16224410.html?v1=422746263&utm_source=google&utm_medium=cpc&gad_source=1&gclid=CjwKCAiAhP67BhAVEiwA2E_9g0JhoBqSMBLNAgbWkiy01n6i_ply9EG3xop18uLGPUtczGc1QUxquRoCtA0QAvD_BwE' },
    { text: 'Page 2', url: 'https://www.flipkart.com/skybags-brat-21-65-l-backpack/p/itm04aff3ff6fb19?pid=BKPGF764YQBHHGWJ&lid=LSTBKPGF764YQBHHGWJFL8MIF&marketplace=FLIPKART&cmpid=content_backpack_8965229628_gmc&gQT=1' },
    { text: 'Page 3', url: 'https://example.com/page3' }
    ],
  Gdrive: [
    { text: 'Page 1', url: 'https://www.zara.com/in/en/mini-tote-bag-p16224410.html?v1=422746263&utm_source=google&utm_medium=cpc&gad_source=1&gclid=CjwKCAiAhP67BhAVEiwA2E_9g0JhoBqSMBLNAgbWkiy01n6i_ply9EG3xop18uLGPUtczGc1QUxquRoCtA0QAvD_BwE' },
    { text: 'Page 2', url: 'https://www.flipkart.com/skybags-brat-21-65-l-backpack/p/itm04aff3ff6fb19?pid=BKPGF764YQBHHGWJ&lid=LSTBKPGF764YQBHHGWJFL8MIF&marketplace=FLIPKART&cmpid=content_backpack_8965229628_gmc&gQT=1' },
    { text: 'Page 3', url: 'https://conseroglobal.com/' }

  ]
}
};
  
  selectSubSegment(segment: string) {
    this.selectedSubSegment = segment;
    this.selectedOption = null; // Reset option when segment changes
  }
  
  selectOption(option: string) {
    this.selectedOption = option;
  }
//     selectedSubSegment: string | null = null;
//     selectedOption: string | null = null;
    
   
// segmentData: { [key: string]: { [key: string]: string[] } } = {
//   FGHJKL: {
//     option1: ['X', 'Y', 'Z'],
//     option2: ['Q', 'W', 'E']
//   },
//   d: {
//     option1: ['L', 'M', 'N'],
//     option2: ['O', 'P', 'Q']
//   },
//   e: {
//     option1: ['A1', 'B1', 'C1'],
//     option2: ['D1', 'E1', 'F1']
//   },
//   f: {
//     option1: ['G1', 'H1', 'I1'],
//     option2: ['J1', 'K1', 'L1']
//   },
// };
    
//     selectSubSegment(segment: string) {
//       this.selectedSubSegment = segment;
//       this.selectedOption = null; // Reset option when segment changes
//     }
    
//     selectOption(option: string) {
//       this.selectedOption = option;
//     }
    
}
