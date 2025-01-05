import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { CardModule } from './card/card.module';
import { LoansModule } from './loans/loans.module';
import { PaymentModule } from './payment/payment.module';
import { BudgetModule } from './budget/budget.module';
import { InvestmentModule } from './investment/investment.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: 'local-db.sql',
    }), 
    UserModule, AccountModule, TransactionModule, CardModule, LoansModule, PaymentModule, BudgetModule, InvestmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
