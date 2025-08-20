"use client";

import React from "react";
import { FooterProps } from "./interface";

import { FooterRoot, Top, Bottom, BottomInner, BottomLinks } from "./base";
import { Brand, Logo, Divider, Address, Socials, SocialLinkItem } from "./brand";
import { Group, GroupTitle, LinkList, LinkItem } from "./navigation";
import {
  Newsletter,
  NewsletterDescription,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton
} from "./newsletter";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

export function Footer({
  logoSrc = "/whitelogo.png",
  addressLines = [
    "5900 Balcones Dr, Austin",
    "Texas 78731, United States",
  ], 
  socials = [
    { icon: <FacebookIcon />, href: "#", name: "Facebook" },
    { icon: <InstagramIcon />, href: "#", name: "Instagram" },
    { icon: <TwitterIcon />, href: "#", name: "Twitter" },
    { icon: <LinkedInIcon />, href: "#", name: "LinkedIn" },
  ],
  groups = [ 
    {
      title: "Links",
      links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "All Forms", href: "/All_forms" },
        { label: "Filing Services", href: "#" },
        { label: "Immigration News", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ],
  newsletter = {
    title: "Newsletter",
    description:
      "Subscribe us & receive our offers and updates your inbox directly",
    placeholder: "Email Address",
  },
  bottomNote = (
    <>
      Designed & Developed by{" "}
      <a href="http://bynddigital.co/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
        BYND Digital
      </a>
    </>
  ),
  bottomLinks = [
    { label: "Terms Of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}: FooterProps) {
  return (
    <FooterRoot>
      <Top>
        <Brand>
          <Logo src={logoSrc} alt="KMARIS" />
          <Divider />
          <Address>
            {addressLines.map((line, i) => (
              <div key={`${line}-${i}`}>{line}</div>
            ))}
          </Address>
          <Socials>
            {socials.map((s, i) => (
              <SocialLinkItem
                key={`${s.name}-${i}`}
                href={s.href}
                className={s.name}
                aria-label={`Follow us on ${s.name}`}
              >
                {s.icon}
              </SocialLinkItem>
            ))}
          </Socials>
        </Brand>

      
        {groups.map((g, gi) => (
          //  Added index to group key
          <Group key={`${g.title}-${gi}`}>
            <GroupTitle>{g.title}</GroupTitle>
            <LinkList>
              {g.links.map((l, li) => (
                //  Added index to link key
                <li key={`${l.label}-${li}`}>
                  <LinkItem href={l.href}>{l.label}</LinkItem>
                </li>
              ))}
            </LinkList>
          </Group>
        ))}

       
        <Newsletter>
          <GroupTitle>{newsletter.title}</GroupTitle>
          <NewsletterDescription>
            {newsletter.description}
          </NewsletterDescription>
          <NewsletterForm onSubmit={(e) => e.preventDefault()}>
            <NewsletterInput placeholder={newsletter.placeholder} />
            <NewsletterButton aria-label="Subscribe">
              <SendIcon />
            </NewsletterButton>
          </NewsletterForm>
        </Newsletter>
      </Top>
      <Bottom>
        <BottomInner>
          <div>{bottomNote}</div>
          <BottomLinks>
            {bottomLinks.map((b, i) => (
              //  Added index to bottom link key
              <a key={`${b.label}-${i}`} href={b.href}>
                {b.label}
              </a>
            ))}
          </BottomLinks>
        </BottomInner>
      </Bottom>
    </FooterRoot>
  );
}

export default Footer;
