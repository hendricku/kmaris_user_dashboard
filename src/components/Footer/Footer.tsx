"use client";

import React from "react";
import { FooterProps } from "./interface";
import * as S from "./elements";

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
    { icon: <FacebookIcon />, href: "#" },
    { icon: <InstagramIcon />, href: "#" },
    { icon: <TwitterIcon />, href: "#" },
    { icon: <LinkedInIcon />, href: "#" },
  ],
  groups = [
    {
      title: "Links",
      links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "All Forms", href: "#" },
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
      Designed & Developed by {" "}
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
    <S.FooterRoot>
      <S.Top>
        {/* Column 1: Brand Info */}
        <S.Brand>
          <S.Logo src={logoSrc} alt="KMARIS" />
          <S.Divider />
          <S.Address>
            {addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </S.Address>
          <S.Socials>
            {socials.map((s) => (
              <S.SocialLinkItem
                key={s.href}
                href={s.href}
                className={s.name}
                aria-label={`Follow us on ${s.name}`}
              >
                  {s.icon}
              </S.SocialLinkItem>
            ))}
          </S.Socials>
        </S.Brand>


        {groups.map((g) => (
          <S.Group key={g.title}>
            <S.GroupTitle>{g.title}</S.GroupTitle>
            <S.LinkList>
              {g.links.map((l) => (
                <li key={l.label}>
                  <S.LinkItem href={l.href}>{l.label}</S.LinkItem>
                </li>
              ))}
            </S.LinkList>
          </S.Group>
        ))}

     
        <S.Newsletter>
          <S.GroupTitle>{newsletter.title}</S.GroupTitle>
          <S.NewsletterDescription>
            {newsletter.description}
          </S.NewsletterDescription>
          <S.NewsletterForm onSubmit={(e) => e.preventDefault()}>
            <S.NewsletterInput placeholder={newsletter.placeholder} />
            <S.NewsletterButton aria-label="Subscribe">
              <SendIcon />
            </S.NewsletterButton>
          </S.NewsletterForm>
        </S.Newsletter>
      </S.Top>
      <S.Bottom>
        <S.BottomInner>
          <div>{bottomNote}</div>
          <S.BottomLinks>
            {bottomLinks.map((b) => (
              <a key={b.label} href={b.href}>
                {b.label}
              </a>
            ))}
          </S.BottomLinks>
        </S.BottomInner>
      </S.Bottom>
    </S.FooterRoot>
  );
}

export default Footer;