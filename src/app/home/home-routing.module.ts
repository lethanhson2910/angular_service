import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  //Home
  {path: "", component: HomeComponent, children:[
    {path: "", component: TrangChuComponent},
    {path: "home", component: TrangChuComponent},
    {path: "tintuc", component: TinTucComponent},
    {path: "danhsachphim", component: DanhSachPhimComponent}
    ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
