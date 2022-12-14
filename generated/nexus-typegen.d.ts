/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../src/types/Context"
import type { core, connectionPluginCore } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     */
    bigint<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "BigInt";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSON";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     */
    bigint<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "BigInt";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  loginCredentials: { // input type
    email: string; // String!
    password: string; // String!
    username: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  BigInt: any
  DateTime: any
  JSON: any
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  author: { // root type
    memberSince?: string | null; // String
    username?: string | null; // String
  }
  course: { // root type
    author_info?: NexusGenScalars['JSON'] | null; // JSON
    id?: NexusGenScalars['BigInt'] | null; // BigInt
    image?: string | null; // String
    lang?: string | null; // String
    price?: string | null; // String
    slug?: string | null; // String
    title?: string | null; // String
  }
  implicitLoginResponse: { // root type
    loggedIn: boolean; // Boolean!
    username?: string | null; // String
  }
  loginResponse: { // root type
    message?: string | null; // String
    username?: string | null; // String
  }
  media: { // root type
    collection_name?: string | null; // String
    file_name?: string | null; // String
    generated_conversions?: NexusGenScalars['JSON'] | null; // JSON
    id?: NexusGenScalars['BigInt'] | null; // BigInt
    uuid?: string | null; // String
  }
  post: { // root type
    author?: NexusGenRootTypes['author'] | null; // author
    content?: string | null; // String
  }
  registerResponse: { // root type
    message: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createAccount: NexusGenRootTypes['registerResponse'] | null; // registerResponse
    createPost: NexusGenRootTypes['post'] | null; // post
    login: NexusGenRootTypes['loginResponse'] | null; // loginResponse
  }
  Query: { // field return type
    getCourses: Array<NexusGenRootTypes['course'] | null> | null; // [course]
    getPopularCourses: Array<NexusGenRootTypes['course'] | null> | null; // [course]
    getPosts: Array<NexusGenRootTypes['post'] | null> | null; // [post]
    getTopCourses: Array<NexusGenRootTypes['course'] | null> | null; // [course]
    implicitLogin: NexusGenRootTypes['implicitLoginResponse'] | null; // implicitLoginResponse
    test: boolean | null; // Boolean
  }
  author: { // field return type
    memberSince: string | null; // String
    username: string | null; // String
  }
  course: { // field return type
    author_info: NexusGenScalars['JSON'] | null; // JSON
    id: NexusGenScalars['BigInt'] | null; // BigInt
    image: string | null; // String
    lang: string | null; // String
    media: Array<NexusGenRootTypes['media'] | null> | null; // [media]
    price: string | null; // String
    slug: string | null; // String
    title: string | null; // String
  }
  implicitLoginResponse: { // field return type
    loggedIn: boolean; // Boolean!
    username: string | null; // String
  }
  loginResponse: { // field return type
    message: string | null; // String
    username: string | null; // String
  }
  media: { // field return type
    collection_name: string | null; // String
    file_name: string | null; // String
    generated_conversions: NexusGenScalars['JSON'] | null; // JSON
    id: NexusGenScalars['BigInt'] | null; // BigInt
    uuid: string | null; // String
  }
  post: { // field return type
    author: NexusGenRootTypes['author'] | null; // author
    content: string | null; // String
  }
  registerResponse: { // field return type
    message: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createAccount: 'registerResponse'
    createPost: 'post'
    login: 'loginResponse'
  }
  Query: { // field return type name
    getCourses: 'course'
    getPopularCourses: 'course'
    getPosts: 'post'
    getTopCourses: 'course'
    implicitLogin: 'implicitLoginResponse'
    test: 'Boolean'
  }
  author: { // field return type name
    memberSince: 'String'
    username: 'String'
  }
  course: { // field return type name
    author_info: 'JSON'
    id: 'BigInt'
    image: 'String'
    lang: 'String'
    media: 'media'
    price: 'String'
    slug: 'String'
    title: 'String'
  }
  implicitLoginResponse: { // field return type name
    loggedIn: 'Boolean'
    username: 'String'
  }
  loginResponse: { // field return type name
    message: 'String'
    username: 'String'
  }
  media: { // field return type name
    collection_name: 'String'
    file_name: 'String'
    generated_conversions: 'JSON'
    id: 'BigInt'
    uuid: 'String'
  }
  post: { // field return type name
    author: 'author'
    content: 'String'
  }
  registerResponse: { // field return type name
    message: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createAccount: { // args
      credentials: NexusGenInputs['loginCredentials']; // loginCredentials!
    }
    createPost: { // args
      content: string; // String!
    }
    login: { // args
      credentials: NexusGenInputs['loginCredentials']; // loginCredentials!
    }
  }
  Query: {
    test: { // args
      bool: boolean; // Boolean!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}