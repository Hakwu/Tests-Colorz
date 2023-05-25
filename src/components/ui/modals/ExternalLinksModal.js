import React from 'react';
import Modal from "@components/ui/Modal";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  Facebook,
  ForumRounded,
  LinkRounded,
  GitHub,
  CampaignRounded,
  HomeRounded,
  Reddit,
  Telegram,
  Twitter,
  ChatRounded
} from "@mui/icons-material";
import Link from "@components/ui/Link";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "next-i18next";

function ExternalLinksModal({ open = false, onClose, links }) {
  const theme = useTheme();
  const { t } = useTranslation('common');

  return (
    <Modal open={open} onClose={onClose}>
      <List sx={{ mt: 2 }}>
        {links?.homepage?.length > 0 && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={links?.homepage[0]} target="_blank">
              <ListItemIcon>
                <HomeRounded sx={{ color: theme.palette.mode === "light" ? 'inherit' : 'white' }}/>
              </ListItemIcon>
              <ListItemText primary={t('home-page')}/>
            </ListItemButton>
          </ListItem>
        )}

        {links?.blockchainSite?.length > 0 && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={links?.blockchainSite[0]} target="_blank">
              <ListItemIcon>
                <LinkRounded sx={{ color: theme.palette.mode === "light" ? 'inherit' : 'white' }}/>
              </ListItemIcon>
              <ListItemText primary="Blockchain" />
            </ListItemButton>
          </ListItem>
        )}

        {links?.announcementUrl?.length > 0 && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={links?.announcementUrl[0]} target="_blank">
              <ListItemIcon>
                <CampaignRounded sx={{ color: theme.palette.mode === "light" ? 'inherit' : 'white' }}/>
              </ListItemIcon>
              <ListItemText primary={t('announcement')}/>
            </ListItemButton>
          </ListItem>
        )}

        {links?.officialForumUrl?.length > 0 && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={links?.officialForumUrl[0]} target="_blank">
              <ListItemIcon>
                <ForumRounded sx={{ color: theme.palette.mode === "light" ? 'inherit' : 'white' }}/>
              </ListItemIcon>
              <ListItemText primary="Forum" />
            </ListItemButton>
          </ListItem>
        )}

        {links?.chatUrl?.length > 0 && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={links?.chatUrl[0]} target="_blank">
              <ListItemIcon>
                <ChatRounded sx={{ color: theme.palette.mode === "light" ? 'inherit' : 'white' }}/>
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
        )}

        {links?.reposUrl?.github?.length > 0 && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={links?.reposUrl.github[0]} target="_blank">
              <ListItemIcon>
                <GitHub sx={{ color: theme.palette.mode === "light" ? 'inherit' : 'white' }}/>
              </ListItemIcon>
              <ListItemText primary="Github" />
            </ListItemButton>
          </ListItem>
        )}


        {links?.subredditUrl && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={links.subredditUrl} target="_blank">
              <ListItemIcon>
                <Reddit sx={{ color: "#EC5428" }}/>
              </ListItemIcon>
              <ListItemText primary="Reddit"/>
            </ListItemButton>
          </ListItem>
        )}

        {links?.telegramChannelIdentifier && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={`https://t.me/${links?.telegramChannelIdentifier}`} target="_blank">
              <ListItemIcon>
                <Telegram sx={{ color: "#4B91E5" }}/>
              </ListItemIcon>
              <ListItemText primary="Telegram" />
            </ListItemButton>
          </ListItem>
        )}

        {links?.twitterScreenName && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={`https://twitter.com/${links?.twitterScreenName}`} target="_blank">
              <ListItemIcon>
                <Twitter sx={{ color: "#479CE9" }}/>
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItemButton>
          </ListItem>
        )}

        {links?.facebookUsername && (
          <ListItem disablePadding>
            <ListItemButton component={Link} href={`https://facebook.com/${links?.facebookUsername}`} target="_blank">
              <ListItemIcon>
                <Facebook sx={{ color: "#439BF0" }}/>
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Modal>
  );
}

export default ExternalLinksModal;
