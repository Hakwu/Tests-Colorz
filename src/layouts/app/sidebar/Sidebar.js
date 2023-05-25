import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Drawer, useMediaQuery, List, ListItem, Collapse, ListItemIcon, ListItemText } from "@mui/material";
import FeatherIcon from "feather-icons-react";

import LogoIcon from "@layouts/logo/LogoIcon";
import MenuItems from "@layouts/app/sidebar/MenuItems";
import Link from "@components/ui/Link";
import { useTranslation } from "next-i18next";

const MenuItem = ({ title, icon, href, selected, component = Link,  isChild = false, onClick, onSidebarClose, children }) => {
  const { t } = useTranslation('common');

  return (
    <ListItem
      button
      href={href}
      component={component}
      onClick={onClick}
      selected={selected}
      sx={{
        mb: 1,
        ...(selected && {
          color: 'black',
          backgroundColor: (theme) => `${theme.palette.primary.main}!important`,
        }),
      }}
    >
      <ListItemIcon
        sx={{
          color: (theme) => theme.palette.mode === "dark" ? "text.primary" : "inherit",
          ...(selected && { color: 'block' }),
          svg: { color: 'inherit', ...(isChild ? { width: "16px", marginLeft: "3px" } : {}) },
        }}
      >
        {typeof icon === "string" ? (
          <FeatherIcon
            icon={icon}
            width="20"
            height="20"
          />
        ) : icon}
      </ListItemIcon>
      <ListItemText onClick={onSidebarClose}>
        {t(`menu.${title}`)}
      </ListItemText>
      {children}
    </ListItem>
  );
};

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };

  const isSelected = (item) => {
    if (item.href === "/") {
      return router.pathname === item.href;
    }
    return router.pathname.includes(item.href);
  };

  const SidebarContent = (
    <Box px={2}>
      <Box display="flex" alignItems="center" height="64px">
        <LogoIcon />
      </Box>
      <Box py={1}>
        <List>
          {MenuItems.map((item, index) => {
            if (item.children) {
              return (
                <React.Fragment key={item.href}>
                  <MenuItem
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                    onClick={() => handleClick(index)}
                    component={router.pathname === item.href ? "li" : Link}
                    selected={router.pathname === item.href}
                  >
                    {(index === open || !!item.children.find(el => el.href === router.pathname)) ? (
                      <FeatherIcon icon="chevron-down" size="16" />
                    ) : (
                      <FeatherIcon icon="chevron-right" size="16" />
                    )}
                  </MenuItem>
                  <Collapse in={index === open || !!item.children.find(el => el.href === router.pathname)} timeout="auto" unmountOnExit>
                    <List component="li" disablePadding>
                      {item.children.map((child) => {
                        return (
                          <MenuItem
                            isChild
                            key={child.title}
                            href={child.href}
                            icon={child.icon}
                            title={child.title}
                            onClick={onSidebarClose}
                            selected={isSelected(child)}
                          />
                        );
                      })}
                    </List>
                  </Collapse>
                </React.Fragment>
              );
            } else {
              return (
                <List component="li" disablePadding key={item.href}>
                  <MenuItem
                    href={item.href}
                    icon={item.icon}
                    title={item.title}
                    selected={isSelected(item)}
                    onSidebarClose={onSidebarClose}
                  />
                </List>
              );
            }
          })}
        </List>
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
