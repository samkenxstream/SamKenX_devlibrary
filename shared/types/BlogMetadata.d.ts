/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * BlogMetadata
 */
export interface BlogMetadata {
  /**
   * The Dev Library ID of the author(s)
   */
  authorIds?: string[];
  /**
   * The name of the human author
   */
  author: string;
  /**
   * The title of the blog post
   */
  title: string;
  /**
   * Full external link to the post
   */
  link: string;
  /**
   * Array of product-specific string tags
   */
  tags: [string, ...string[]];
  [k: string]: unknown;
}
