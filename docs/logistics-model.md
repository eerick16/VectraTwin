# VectraTwin Logistics Model

## Purpose

VectraTwin is an AI-powered logistics simulation platform that models global supply chains through a Digital Twin approach.

The objective is to simulate:

- Cargo movement
- Transportation costs
- Delivery times
- Supply chain disruptions
- Risk propagation
- Mitigation strategies

---

## Core Entities

### Shipment

Represents a cargo movement operation.

Attributes:

- Origin
- Destination
- Cargo Type
- Weight
- Volume
- Cargo Value
- Priority
- Current Status

---

### Node

Represents a logistics location.

Examples:

- Ports
- Airports
- Rail Terminals
- Distribution Centers

Attributes:

- Geographic Coordinates
- Capacity
- Congestion Level
- Operational Status

---

### Route

Represents a connection between nodes.

Attributes:

- Distance
- Mode of Transport
- Cost
- ETA
- Risk Score

---

### Asset

Represents a transport vehicle.

Examples:

- Vessel
- Aircraft
- Train
- Truck

Attributes:

- Capacity
- Speed
- Fuel Consumption
- Carbon Emissions
