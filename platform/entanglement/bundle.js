/*****************************************************************************
 * Open MCT Web, Copyright (c) 2014-2015, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT Web is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT Web includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/
/*global define*/

define(['legacyRegistry'], function (legacyRegistry) {
    "use strict";
    legacyRegistry.register("platform/entanglement", {
        "name": "Entanglement",
        "description": "Tools to assist you in entangling the world of WARP.",
        "configuration": {},
        "extensions": {
            "actions": [
                {
                    "key": "move",
                    "name": "Move",
                    "description": "Move object to another location.",
                    "glyph": "f",
                    "category": "contextual",
                    "implementation": "actions/MoveAction.js",
                    "depends": ["policyService", "locationService", "moveService"]
                },
                {
                    "key": "copy",
                    "name": "Duplicate",
                    "description": "Duplicate object to another location.",
                    "glyph": "+",
                    "category": "contextual",
                    "implementation": "actions/CopyAction.js",
                    "depends": ["$log", "policyService", "locationService", "copyService",
                        "dialogService", "notificationService"]
                },
                {
                    "key": "link",
                    "name": "Create Link",
                    "description": "Create Link to object in another location.",
                    "glyph": "\u00E8",
                    "category": "contextual",
                    "implementation": "actions/LinkAction.js",
                    "depends": ["policyService", "locationService", "linkService"]
                },
                {
                    "key": "follow",
                    "name": "Go To Original",
                    "description": "Go to the original, un-linked instance of this object.",
                    "glyph": "\u00F4",
                    "category": "contextual",
                    "implementation": "actions/GoToOriginalAction.js"
                },
                {
                    "key": "locate",
                    "name": "Set Primary Location",
                    "description": "Set a domain object's primary location.",
                    "glyph": "",
                    "category": "contextual",
                    "implementation": "actions/SetPrimaryLocationAction.js"
                }
            ],
            "components": [
                {
                    "type": "decorator",
                    "provides": "creationService",
                    "implementation": "services/LocatingCreationDecorator.js"
                },
                {
                    "type": "decorator",
                    "provides": "objectService",
                    "implementation": "services/LocatingObjectDecorator.js",
                    "depends": ["contextualize", "$q", "$log"]
                }
            ],
            "policies": [
                {
                    "category": "action",
                    "implementation": "policies/CrossSpacePolicy.js"
                }
            ],
            "capabilities": [
                {
                    "key": "location",
                    "name": "Location Capability",
                    "description": "Provides a capability for retrieving the location of an object based upon it's context.",
                    "implementation": "capabilities/LocationCapability",
                    "depends": [ "$q", "$injector" ]
                }
            ],
            "services": [
                {
                    "key": "moveService",
                    "name": "Move Service",
                    "description": "Provides a service for moving objects",
                    "implementation": "services/MoveService.js",
                    "depends": ["policyService", "linkService", "$q"]
                },
                {
                    "key": "linkService",
                    "name": "Link Service",
                    "description": "Provides a service for linking objects",
                    "implementation": "services/LinkService.js",
                    "depends": ["policyService"]
                },
                {
                    "key": "copyService",
                    "name": "Copy Service",
                    "description": "Provides a service for copying objects",
                    "implementation": "services/CopyService.js",
                    "depends": ["$q", "policyService", "now"]
                },
                {
                    "key": "locationService",
                    "name": "Location Service",
                    "description": "Provides a service for prompting a user for locations.",
                    "implementation": "services/LocationService.js",
                    "depends": ["dialogService"]
                }
            ],
            "licenses": [
            ]
        }
    });
});