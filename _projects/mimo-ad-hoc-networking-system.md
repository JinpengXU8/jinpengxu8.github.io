---
layout: page
title: Low-Altitude MIMO Ad Hoc Networking System
description: A control-plane and data-plane separated architecture for reliable, self-organizing, and high-capacity low-altitude wireless networking.
img: assets/img/projects/uav-mimo-ad-hoc/cover.jpg
importance: 1
category: research
related_publications: true
---

## Overview

This project develops a low-altitude MIMO ad hoc networking system for infrastructure-free, self-organizing, and multi-hop wireless communications. The system integrates MIMO transmission, distributed networking, dynamic topology management, and real-time hardware implementation.

## 1. What Is a MIMO Ad Hoc Network?

A MIMO ad hoc network is a decentralized wireless network in which multiple communication nodes establish links and organize network topology without relying on fixed communication infrastructure. By integrating multiple-input multiple-output (MIMO) transmission with ad hoc networking, the system can improve transmission capacity, link reliability, spatial coverage, and resistance to interference.

The system is designed for low-altitude platforms, mobile terminals, unmanned aerial vehicles, and rapidly deployed wireless networks. It supports dynamic topology changes, multi-hop transmission, distributed network access, and adaptive resource allocation.

### Control-Plane and Data-Plane Separation

The system adopts a control-plane and data-plane separated architecture.

- The **control plane** is responsible for network discovery, signaling exchange, topology management, routing coordination, link maintenance, and resource scheduling.
- The **data plane** is responsible for high-rate payload transmission, MIMO signal processing, beamforming, channel estimation, and packet forwarding.

This architecture allows network control and high-speed data transmission to be designed and optimized separately, improving scalability, reliability, and flexibility.

{% include figure.liquid
  loading="eager"
  path="assets/img/projects/uav-mimo-ad-hoc/system-architecture.png"
  title="Control-plane and data-plane separated architecture"
  class="img-fluid rounded z-depth-1"
%}

<p class="caption">
  Architecture of the low-altitude MIMO ad hoc networking system.
</p>

## 2. Prototype Devices and Technical Specifications

The prototype devices integrate radio-frequency modules, multi-antenna transceivers, real-time baseband processing, network protocol processing, and embedded control units. The system was implemented using SDR, ARM, and FPGA-based hardware platforms.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid
      path="assets/img/projects/uav-mimo-ad-hoc/device-front.jpg"
      title="Prototype device"
      class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid
      path="assets/img/projects/uav-mimo-ad-hoc/device-deployment.jpg"
      title="Device deployment"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

### Main Technical Specifications

| Specification | Value |
|---|---|
| Operating frequency | [Fill in the frequency band] |
| Channel bandwidth | [Fill in the bandwidth] |
| MIMO configuration | [e.g., 2×2 or 4×4 MIMO] |
| Maximum data rate | [Fill in the measured data rate] |
| Communication range | [Fill in the tested range] |
| Number of networking nodes | [Fill in the supported node count] |
| Network topology | Multi-hop ad hoc network |
| Baseband platform | ARM/FPGA or SDR |
| Networking functions | Self-organization, routing, relaying, and topology management |
| Supported mobility | [Static / ground-mobile / UAV-mobile] |

The reported specifications should preferably be based on measured system performance rather than theoretical peak values.

## 3. Field Test and Demonstration

Field experiments were conducted to evaluate network establishment, multi-node connectivity, wireless coverage, multi-hop transmission, communication reliability, and system performance under realistic deployment conditions.

{% include figure.liquid
  path="assets/img/projects/uav-mimo-ad-hoc/field-test.jpg"
  title="Field experiment of the MIMO ad hoc networking system"
  class="img-fluid rounded z-depth-1"
%}

### Demonstration Video

<video
  width="100%"
  controls
  playsinline
  preload="metadata"
  poster="{{ '/assets/img/projects/uav-mimo-ad-hoc/video-cover.jpg' | relative_url }}"
>
  <source
    src="{{ '/assets/video/uav-mimo-ad-hoc-demo.mp4' | relative_url }}"
    type="video/mp4"
  >
  Your browser does not support the video tag.
</video>

<p class="caption">
  Field demonstration of network establishment, multi-node communication, and data transmission.
</p>