import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { AppComponent }  from '../components/app.component';
import { PostService } from '../services/post.service';

@NgModule({
  imports: [BrowserModule,HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:[PostService]
})
export class AppModule {}
