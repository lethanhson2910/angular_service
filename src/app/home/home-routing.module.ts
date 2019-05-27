import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { HomeComponent } from './home.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';

const routes: Routes = [
  //Home
  {path: "", component: HomeComponent, children:[
    {path: "", component: TrangChuComponent},
    {path: "home", component: TrangChuComponent},
    {path: "tin-tuc", component: TinTucComponent},
    {path: "danh-sach-phim", component: DanhSachPhimComponent},
    //cách 1: truyền 1 tham số
    {path: "chi-tiet-phim/:id", component: ChiTietPhimComponent},
    //cách 2: truyền nhiều tham số
    // {path: "chi-tiet-phim", component: ChiTietPhimComponent},

    //Trang phòng vé
    {path: "phong-ve/:maLichChieu", loadChildren: "./phong-ve/phong-ve.module#PhongVeModule"}
    ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
