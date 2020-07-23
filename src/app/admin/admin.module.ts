import { WorkerDeleteDialogComponent } from './worker-delete-dialog/worker-delete-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AdminOrdersComponent } from './orders/orders.component';
import { AdminWorkersComponent } from './workers/workers.component';
import { AdminProductsComponent } from './products/products.component';

import { AdminOrderService } from './services/admin-order.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AdminComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    AdminWorkersComponent,
    WorkerDeleteDialogComponent,
  ],
  providers: [AdminOrderService],
})
export class AdminModule {}
