import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadStart, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Type } from 'src/app/models/Type';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: number = -1;
  private sub: any;
  types = [

    { name: 'Sellect', code: '-1' },
    { name: 'Basic', code: '0' },
    { name: 'Premium', code: '1' },
  ]
  title = 'reactiv-forms';


  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });




    if (this.id != null) {
      var product = this.productService.getById(+this.id)
      this.myForm = this.fb.group({
        name: [product.name, Validators.required],
        amount: [product.amount, Validators.required],
        description: [product.description, Validators.required],
        id: [product.id, Validators.required],
        type: [product.type, Validators.required],
      });


    } else {
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        amount: ['', Validators.required],
        description: ['', Validators.required],
        id: ['', Validators.required],
        type: ['', Validators.required],
      });
    }

    


  }
  products: Array<Product> = [];


  ngOnInit() {




  }

  get getControl() {
    return this.myForm.controls;
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('id', form.value.id);
    console.log('name', form.value.name);
    console.log('amount', form.value.amount);
    console.log('description', form.value.description);
    console.log('type', form.value.type);

    if (form.valid) {
      var product = new Product(form.value.id, form.value.name,
        form.value.amount, form.value.description, form.value.type);
      console.log("in submit");
      if (isNaN(this.id)) {
        console.log("gonna add");

        if (this.productService.insert(product)) {

        }

        localStorage.setItem("products", JSON.stringify(this.products));
        alert("Created");
      }
      else {

        var productById = this.productService.getById(this.id);
        productById.name = form.value.name;
        productById.description = form.value.description;
        productById.type = form.value.type;
        productById.amount = form.value.amount;
        this.productService.edit(this.id, productById);




      }
      this.router.navigate(['/products']);
    }
    else {
      alert("form not valid!")
    }

    console.log(JSON.parse(localStorage.getItem('products') || '{}'));
    
  }

}
