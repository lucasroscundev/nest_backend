export abstract class HashGenerator {
  abstract hash(plain: string): Promise<string>
}

// SOLID

// Single Responsibility
// Open Closed Principle
// Liskov
// Interface Segregation <<
// Dependency Inversion
