import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
// import profile from '../models/profile';

export default class ProfileFormComponent extends Component {
  @tracked isShowError = false;
  @tracked imgSrc = '/images/images.png';

  @action submitForm(event) {
    event.preventDefault();
    this.isShowError = true;
    if (this.args.model.validations.isInvalid) return;

    const outPut = {
      firstName: this.args.model.firstName,
      lastName: this.args.model.lastName,
      phone: this.args.model.phone,
      email: this.args.model.email,
      comment: this.args.model.comment,
      designation: this.args.model.designation,
    };
    console.log(outPut);
  }

  @action handleUploadImage(e) {
    const imgFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.imgSrc = reader.result;
      }
    };
    reader.readAsDataURL(imgFile);
  }
}
