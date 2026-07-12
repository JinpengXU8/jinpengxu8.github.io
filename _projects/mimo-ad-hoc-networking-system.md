---
layout: page
title: Low-Altitude UAV MIMO Ad-Hoc Networking System
description: Architecture, prototype devices, and field demonstrations of a low-altitude UAV MIMO ad-hoc networking system.
img: assets/img/projects/uav-mimo-ad-hoc/cover.jpg
importance: 1
category: research
related_publications: true
---

## Overview

This project develops a low-altitude MIMO ad-hoc networking system for infrastructure-free, self-organizing, and multi-hop wireless communications. Featuring decentralized control and autonomous coordination, the system integrates MIMO transmission, dynamic topology management, opportunistic channel access, on-demand bandwidth allocation, and real-time hardware implementation.


The project demonstrates the overall networking architecture, prototype communication devices, technical specifications, and field-test results.

---

## 1. MIMO Ad-Hoc Networking Architecture

A MIMO ad-hoc network is a decentralized wireless network in which multiple communication nodes autonomously establish wireless links, organize the network topology, and forward data without relying on fixed communication infrastructure.

By combining multiple-input multiple-output (MIMO) transmission with ad-hoc networking, the system can improve communication capacity, link reliability, spatial coverage, and adaptability to dynamic network conditions.

### Control-Plane and Data-Plane Separation

The proposed system adopts a **control-plane and data-plane separation architecture**:

- The **control plane** performs network discovery, signaling exchange, topology management, routing coordination, link maintenance, and resource scheduling.
- The **data plane** supports high-rate payload transmission, MIMO signal processing, channel estimation, beamforming, and multi-hop packet forwarding.

Separating the two planes enables flexible network management while supporting reliable and high-throughput data transmission.

{% include figure.liquid
  loading="eager"
  path="assets/img/projects/uav-mimo-ad-hoc/system-architecture.png"
  title="Control-plane and data-plane separation architecture"
  class="img-fluid rounded z-depth-1"
%}

<p class="caption">
  Control-plane and data-plane separation architecture of the low-altitude UAV MIMO ad-hoc networking system.
</p>

---

## 2. Prototype Devices and Technical Specifications

The prototype devices integrate radio-frequency modules, multi-antenna transceivers, real-time baseband processing, network protocol processing, and embedded control units.

The system was implemented using software-defined radio (SDR), ARM, and FPGA-based hardware platforms.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid
      path="assets/img/projects/uav-mimo-ad-hoc/device-front.jpg"
      title="Prototype communication device"
      class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid
      path="assets/img/projects/uav-mimo-ad-hoc/device-deployment.jpg"
      title="Prototype device deployment"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

### Technical Specifications

| Specification | Value |
|---|---|
| MIMO modes | Spatial multiplexing, space–time coding, receive combining, and Tx/Rx beamforming |
| Receiver sensitivity | −99 dBm at 5 MHz bandwidth |
| Adaptive data rate | 1–130+ Mbps |
| Frequency range | 1300–1430 MHz (customizable) |
| Channel bandwidth | 1.25 / 2.5 / 5 / 10 / 20 MHz (configurable) |
| Modulation | TD-COFDM; adaptive BPSK/QPSK/16QAM/64QAM |
| Single-hop range | ≥100 km (LoS); 1–30 km in urban environments |
| Transmit power | 1 mW–2 W |
| Operation modes | P2P, P2MP, multi-hop relay, and mesh networking |
| Single-hop latency | Average ≈3 ms at 20 MHz bandwidth |
| Anti-jamming capabilities | Automatic/manual hopping, intelligent channel selection, and network-level mitigation |
| Networking scale | More than 1,000 nodes |

The reported technical specifications are based on prototype implementation and field measurements.

---

## 3. Field Tests and Demonstration

Field experiments were conducted to evaluate network initialization, multi-node connectivity, wireless coverage, multi-hop transmission, communication reliability, and system operation under realistic deployment conditions.

{% include figure.liquid
  path="assets/img/projects/uav-mimo-ad-hoc/field-test.jpg"
  title="Field test of the UAV MIMO ad-hoc networking system"
  class="img-fluid rounded z-depth-1"
%}

<p class="caption">
  Field test of the low-altitude UAV MIMO ad-hoc networking system.
</p>

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
  Demonstration of network establishment, multi-node connectivity, and wireless data transmission.
</p>