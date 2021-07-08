import { Component, OnInit } from '@angular/core';
import { BlogPostService } from 'src/app/service/blog-post.service';

import { ToastrService } from 'ngx-toastr';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css'],
})
export class AddBlogPostComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data!: any;
  constructor(
    private blogPostService: BlogPostService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}
  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }
  insertData() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.blogPostService.insertData(this.form.value).subscribe((res) => {
      this.data = res;
      this.toastr.success(
        JSON.stringify(this.data.code),
        JSON.stringify(this.data.message),
        {
          timeOut: 1000,
          progressBar: true,
        }
      );
      this.router.navigateByUrl('/');
    });
  }
}
