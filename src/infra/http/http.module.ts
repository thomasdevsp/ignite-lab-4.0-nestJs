import { CancelNotification } from "@application/use-cases/cancel-notification";
import { CountRecipientNotifications } from "@application/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "@application/use-cases/get-recipients-notification";
import { ReadNotification } from "@application/use-cases/read-notification";
import { SendNotification } from "@application/use-cases/send-notification";
import { UnreadNotification } from "@application/use-cases/unread-notification";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controller/notifications.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [
    NotificationsController
  ],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ]
})
export class HttpModule {}
