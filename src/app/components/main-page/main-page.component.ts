import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  showPopup: boolean = true;

  selectedExam: number | null = null;
  selectedOption: number | null = null;
  nestedOption: string | null = null;


navigate(direction: string) {
  const order = ['Internet1', 'GDrive1'];
  const currentIndex = this.nestedOption ? order.indexOf(this.nestedOption) : -1;

  if (direction === 'prev' && currentIndex > 0) {
    this.nestedOption = order[currentIndex - 1];
  } else if (direction === 'next' && currentIndex < order.length - 1) {
    this.nestedOption = order[currentIndex + 1];
  }
}


  selectExam(examNumber: number): void {
    this.selectedExam = examNumber;
    this.selectedOption = null; // Reset selected option when a new exam is selected
  }

  selectOption(optionNumber: number): void {
    if (this.selectedOption === optionNumber) {
      this.selectedOption = null; // Toggle off if clicked again
      this.nestedOption = null;  // Reset nestedOption when parent is deselected
    } else {
      this.selectedOption = optionNumber;
      this.nestedOption = null;  // Reset nestedOption when parent changes
    }
  }

  handleNestedOption(option: string): void {
    alert(`You selected Sub-Option ${option} under Option 1`);
    // Add logic for handling sub-options
  }
  selectNestedOption(option: string): void {
    this.nestedOption = this.nestedOption === option ? null : option; // Toggle nested option visibility
  }

  handleLinkClick(link: string): void {
    console.log(`Clicked on link: ${link}`);
    // Handle the link click logic here (navigate, open a modal, etc.)
  }

  goBack(): void {
  this.nestedOption = null; // Reset nestedOption to go back to the previous level
}

}
