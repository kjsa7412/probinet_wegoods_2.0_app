import { createStackNavigator, createAppContainer } from "react-navigation";
import { stackStyles } from "./config";

import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";

/// Write
import GoodsWriteNavigation from "./WriteNavigation/GoodsWriteNavigation";
import PostWriteNavigation from "./WriteNavigation/PostWriteNavigation";
import ProfileWriteNavigation from "./WriteNavigation/ProfileWriteNavigation";
import SupportWriteNavigation from "./WriteNavigation/SupportWriteNavigation";

/// SearchNavigation
import GoodsSearchNavigation from "./SearchNavigation/GoodsSearchNavigation";
import PostSearchNavigation from "./SearchNavigation/PostSearchNavigation";
import ProfileSearchNavigation from "./SearchNavigation/ProfileSearchNavigation";
import SupportSearchNavigation from "./SearchNavigation/SupportSearchNavigation";

/// ReviewNavigation
import GoodsReviewNavigation from "./ReviewNavigation/GoodsReviewNavigation";
import PostReviewNavigation from "./ReviewNavigation/PostReviewNavigation";
import ProfileReviewNavigation from "./ReviewNavigation/ProfileReviewNavigation";
import SupportReviewNavigation from "./ReviewNavigation/SupportReviewNavigation";

/// CommentNavigation
import GoodsCommentNavigation from "./CommentNavigation/GoodsCommentNavigation";
import PostCommentNavigation from "./CommentNavigation/PostCommentNavigation";
import ProfileCommentNavigation from "./CommentNavigation/ProfileCommentNavigation";
import SupportCommentNavigation from "./CommentNavigation/SupportCommentNavigation";

/// MessageNavigation
import GoodsMessageNavigation from "./MessageNavigation/GoodsMessageNavigation";
import PostMessageNavigation from "./MessageNavigation/PostMessageNavigation";
import ProfileMessageNavigation from "./MessageNavigation/ProfileMessageNavigation";
import SupportMessageNavigation from "./MessageNavigation/SupportMessageNavigation";

/// PaymentNavigation
import GoodsPaymentNavigation from "./PaymentNavigation/GoodsPaymentNavigation";
import PostPaymentNavigation from "./PaymentNavigation/GoodsPaymentNavigation";
import ProfilePaymentNavigation from "./PaymentNavigation/GoodsPaymentNavigation";
import SupportPaymentNavigation from "./PaymentNavigation/GoodsPaymentNavigation";

const MainNavigation = createStackNavigator(
  {
    TabNavigation,
    PhotoNavigation,
    /// WriteNavigation
    GoodsWriteNavigation,
    PostWriteNavigation,
    ProfileWriteNavigation,
    SupportWriteNavigation,
    /// SearchNavigation
    GoodsSearchNavigation,
    PostSearchNavigation,
    ProfileSearchNavigation,
    SupportSearchNavigation,
    /// ReviewNavigation
    GoodsReviewNavigation,
    PostReviewNavigation,
    ProfileReviewNavigation,
    SupportReviewNavigation,
    /// CommentNavigation
    GoodsCommentNavigation,
    PostCommentNavigation,
    ProfileCommentNavigation,
    SupportCommentNavigation,
    /// MessageNavigation
    GoodsMessageNavigation,
    PostMessageNavigation,
    ProfileMessageNavigation,
    SupportMessageNavigation,
    /// PaymentNavigation
    GoodsPaymentNavigation,
    PostPaymentNavigation,
    ProfilePaymentNavigation,
    SupportPaymentNavigation
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        ...stackStyles
      }
    },
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);
