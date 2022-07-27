# Summary

The goal of this assignment was to implement a dropdown with options queried from a GraphQl endpoint with persistent Local Storage.

## Test Plan

In the project directory, you can run:

## Comments

To query data from the GraphQL endpoint, I could've have used a client like Apollo or Relay however since we were doing a simple GET request, I felt those packages were unneeded. If this project were to scale I would have to consider using these packages as iteration speed becomes more important. I used custom hooks for both the fetching and persistent data functionality that way I could use both for whatever components I may make in the future. 
