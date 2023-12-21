import React from "react";

import { Button, Text } from "components";

const DashboardOverviewBreadcrumb = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer font-inter h-8 min-w-[96px] text-center text-sm text-white-A700_66"
          shape="round"
          size="xs"
        >
          {props?.dashboardbutton}
        </Button>
        <Text
          className="text-sm text-white-A700_33 w-auto"
          size="txtInterRegular14WhiteA70033"
        >
          {props?.text}
        </Text>
        <Button
          className="cursor-pointer font-inter h-8 min-w-[79px] text-center text-sm text-white-A700"
          shape="round"
          size="xs"
        >
          {props?.overviewbutton}
        </Button>
      </div>
    </>
  );
};

DashboardOverviewBreadcrumb.defaultProps = {
  dashboardbutton: "Dashboards",
  text: "/",
  overviewbutton: "Overview",
};

export default DashboardOverviewBreadcrumb;
